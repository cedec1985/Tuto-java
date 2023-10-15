package tests;

import java.util.Scanner;
public class exo9 {
public static void main( String[] args ) {

Scanner sc = new Scanner (System.in);
int boisson =Integer.parseInt(sc.nextLine());

int CocaCola =1;
int Fanta = 2;
int Orangina =3;
int Sprite =4;
int Pepsi = 5;
int Tropico =6;
boolean stock =true;
if (stock) {
	
switch(boisson) {

case 1:
	System.out.println("vous avez choisi un CocaCola");
	break;
case 2:
	System.out.println("vous avez choisi un Fanta");
	break;
case 3:
	System.out.println("vous avez choisi un orangina");
	break;
case 4:
	System.out.println("vous avez choisi un Sprite");
	break;
case 5:
	System.out.println("vous avez choisi un Pepsi");
	break;
case 6 :
	stock=false;
	System.out.println("vous avez choisi un Tropico mais il n'est plus en stock !");
default:
	stock=false;
	System.out.println("veuillez choisir une boisson en stock");}
	}
else {
System.out.println("il n'y a plus de stock de boissons" );
stock=false;
}}}
