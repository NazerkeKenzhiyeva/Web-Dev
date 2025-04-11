from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:id>/', views.company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='company-vacancies'),

   
    path('vacancies/', views.VacancyListAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', views.VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view(), name='top-ten-vacancies'),
]
