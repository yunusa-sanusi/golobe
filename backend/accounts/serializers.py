from rest_framework import serializers

from .models import User, Customer, Staff, CustomerProfile, StaffProfile


class StaffUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email',
                  'username', 'phone_number', 'address', 'dob', 'password')

    def create(self, validated_data):
        email = validated_data['email']
        username = validated_data['username']
        password = validated_data['password']
        user = Staff.objects.create_user(
            email=email, username=username, password=password)
        return user


class CustomerUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Customer
        fields = ('first_name', 'last_name', 'email',
                  'username', 'phone_number', 'address', 'password')

    def create(self, validated_data):
        email = validated_data['email']
        username = validated_data['username']
        password = validated_data['password']
        user = Customer.objects.create_user(
            email=email, username=username, password=password)
        return user


class StaffProfileSerializer(serializers.ModelSerializer):
    user = StaffUserSerializer()

    class Meta:
        model = StaffProfile
        fields = ('user', 'bio', 'profile_picture', 'slug')

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        user = instance.user
        user_serializer = StaffUserSerializer(
            instance=user, data=user_data, partial=True)
        if user_serializer.is_valid():
            user_serializer.save()
        return super().update(instance, validated_data)
