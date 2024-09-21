from rest_framework import serializers
from .models import Product, Review, Seller

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['title', 'image', 'short_description']

class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = ['name', 'logo', 'rating', 'warranty_offer']

class ProductSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    seller = SellerSerializer()

    class Meta:
        model = Product
        fields = ['title', 'image', 'description', 'original_price', 'offer_price', 'reviews', 'seller']
