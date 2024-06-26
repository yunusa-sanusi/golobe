from rest_framework import generics

from .models import CustomerProfile, User, Customer, Staff, StaffProfile
from .serializers import StaffUserSerializer, CustomerUserSerializer, StaffProfileSerializer


class Staffs(generics.ListCreateAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffUserSerializer


class Customers(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerUserSerializer


class Staff(generics.RetrieveUpdateDestroyAPIView):
    queryset = StaffProfile.objects.all()
    serializer_class = StaffProfileSerializer
    lookup_field = 'slug'

    def perform_destroy(self, instance):
        return self.request.user.delete()


class Customer(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomerProfile.objects.all()
    serializer_class = StaffUserSerializer
    lookup_field = 'slug'
