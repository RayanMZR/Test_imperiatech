from django.urls import path
from .views import DocumentUploadView, DocumentListView, DocumentDeleteView

urlpatterns = [
    path('upload/', DocumentUploadView.as_view(), name='document-upload'),
    path('', DocumentListView.as_view(), name='document-list'),
    path('<int:id>/', DocumentDeleteView.as_view(), name='document-delete'),
]
