from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Client, Domain

server_domain = ".localhost"


def index(request):
    return HttpResponse("<h1>Public Index</h1>")

@api_view(['POST'])
def register(request):
    client_name = request.data['client_name']
    client_domain = request.data['client_domain'].lower()
    tenant = Client(schema_name=client_domain, name=client_name)
    tenant.save()
    domain = Domain(domain=client_domain + server_domain, tenant=tenant, is_primary=True)
    domain.save()
    return Response("New Account Created", status=status.HTTP_201_CREATED)
    
