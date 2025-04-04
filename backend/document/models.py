from django.db import models
from django.contrib.auth.models import User

class Document(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='document')
    file = models.FileField(upload_to='document/')
    upload_date = models.DateTimeField(auto_now_add=True)
    
    @property
    def name(self):
        return self.file.name.split('/')[-1]

    def __str__(self):
        return f"{self.name} uploaded by {self.user.username}"
