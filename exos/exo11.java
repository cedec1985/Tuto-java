package tests;

import java.util.Scanner;

public class exo11 {

public static void main( String[] args ) {
	
Scanner notes = new Scanner (System.in);
int i = Integer.parseInt(notes.nextLine());
char insuffisant = 'I';
char suffisant ='S';
char bien ='B';
char tresbien = 'T';
char excellente ='E';

if ( i>=0 && i<=20) {
	if  (i>= 0 && i<=10) {
	System.out.println("votre appréciation est :" +insuffisant + " : insuffisant");
	}
		else if (i>10 && i<13 ) {
		System.out.println("votre appréciation est :" +suffisant + ": suffisant");	
	}
		else if (i>=13 && i<=15) {
		System.out.println("votre appréciation est :" +bien +": bien");}
		else if (i>15 && i<=18) {
		System.out.println("votre appréciation est :" +tresbien +": très bien");
	}	
		else if (i>18 && i<20) {
		System.out.println("votre appréciation est :" +excellente +": excellente");
	}
}
else {
	System.out.println("il n' y a pas d'appréciations pour cette note !");
}
}}

	


