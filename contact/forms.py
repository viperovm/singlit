from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=150, label='Ваше Имя', widget=forms.TextInput(attrs={"class": "form-control"}))
    phone = forms.CharField(max_length=15, label='Ваш Телефон', widget=forms.TextInput(attrs={"class": "form-control"}))
    email = forms.EmailField(max_length=150, label='Ваш Email', widget=forms.EmailInput(attrs={"class": "form-control"}))
    company_name = forms.CharField(max_length=150, label='Название Организации', widget=forms.TextInput(attrs={"class": "form-control"}))
    message = forms.CharField(label='Ваше Сообщение', required=False, widget=forms.Textarea(attrs={
        "class": "form-control md-textarea",
        "rows": 5
    }))