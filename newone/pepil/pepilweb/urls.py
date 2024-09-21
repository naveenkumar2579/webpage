from django.urls import path

from . import views
from .views import ProductListCreate
from .views import ReactAppView

urlpatterns = [
    path('products/', ProductListCreate.as_view(), name='product-list-create'),
    path('', ReactAppView.as_view(), name='react-app'),

]

