from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

User = get_user_model()


class MyUserAdmin(UserAdmin):  # default admin class for default user model
    readonly_fields = ('date_joined',)
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info',
         {'fields': ('first_name', 'last_name', 'avatar', 'location', 'phone', 'loved_things', 'description')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Groups', {'fields': ('groups',)}),
    )
    # fields which are shown when looking at a list of instances
    list_display = ('email', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_superuser')
    ordering = ('email',)


admin.site.register(User, MyUserAdmin)
