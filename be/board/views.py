from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Board
from .serializers import BoardSerializers, Board

# Create your views here.

@api_view(['GET'])
def board_details(request, **kwargs):
    if 'pk' in kwargs:
        board = BoardSerializers(Board.objects.get(pk=kwargs['pk']), many=False).data
    
    else:
        board = BoardSerializers(Board.objects.all(), many=True).data
    return Response(board)

@api_view(['POST'])
def board_actions(request):
    board = None
    if request.method == 'POST':
        # board = Board.objects.create(
        #     title=request.data['title'],
        #     description=request.data['description'], 
        # )
        serializer = BoardSerializers(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

    return Response(serializer.data)