from rest_framework import serializers
from .models import Document

class DocumentSerializer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField()

    class Meta:
        model = Document
        fields = ['id', 'name', 'upload_date', 'file']
        read_only_fields = ['upload_date']
