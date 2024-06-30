from rest_framework import generics, status
from rest_framework.permissions import DjangoModelPermissions, IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .models import CustomerProfile, Customer, Staff, StaffProfile
from .serializers import StaffUserSerializer, CustomerUserSerializer, StaffProfileSerializer
from .permissions import IsOwnerOrReadOnly


class Staffs(generics.ListCreateAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffUserSerializer
    permission_classes = [IsAdminUser]


class Customers(generics.CreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerUserSerializer


class Staff(generics.RetrieveUpdateDestroyAPIView):
    queryset = StaffProfile.objects.all()
    serializer_class = StaffProfileSerializer
    permission_classes = [IsAuthenticated,
                          DjangoModelPermissions, IsOwnerOrReadOnly]
    lookup_field = 'slug'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance.user)
        return Response({'detail': f'{instance.user.username} has been deleted successfully.'}, status=status.HTTP_200_OK)


class Customer(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomerProfile.objects.all()
    serializer_class = StaffUserSerializer
    permission_classes = [IsAuthenticated,
                          DjangoModelPermissions, IsOwnerOrReadOnly]
    lookup_field = 'slug'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance.user)
        return Response({'detail': f'{instance.user.username} has been deleted successfully.'}, status=status.HTTP_200_OK)
