from django.db import models
from django.utils import timezone
import datetime
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils.translation import gettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField
from .managers import CustomUserManager

def current_year():
    return datetime.date.today().year

def max_value_year(value):
    return MaxValueValidator(current_year() + 4)(value)   

class User(AbstractBaseUser, PermissionsMixin):

    username = None
    email = models.EmailField(_("email address"), unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = CustomUserManager()

    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    

class UserProfile(models.Model):
    USER_SHIRT_SIZES = (
        ("Women's XS", "WOMEN_XS"),
        ("Women's S", "WOMEN_S"),
        ("Women's M", "WOMEN_M"),
        ("Women's L", "WOMEN_L"),
        ("Women's XL", "WOMEN_XL"),
        ("Women's XXL", "WOMEN_XXL"),
        ("Men's XS", "MEN_XS"),
        ("Men's S", "MEN_S"),
        ("Men's M", "MEN_M"),
        ("Men's L", "MEN_L"),
        ("Men's XL", "MEN_XL"),
        ("Men's XXL", "MEN_XXL"),
    )

    # user data
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    can_create_club = models.BooleanField(default=True) # maybe limit users to create one club per account?

    # user profile info
    phone_number = PhoneNumberField(blank=True)
    year = models.PositiveIntegerField(_('year'), default=current_year(), validators=[MinValueValidator(1980), max_value_year], blank=True)
    bio = models.CharField(_("bio"), max_length=500, blank=True)
    shirt_size = models.CharField(max_length=12, choices=USER_SHIRT_SIZES, blank=True)

    # ! Add Ememergency Contact Info !

    


    

    

    
    

    




