package tests;

import java.util.Scanner;

public class calculatrice {

public static void main( String[] args ) {	
	
Scanner clavier = new Scanner(System.in);
System.out.println("entrez le premier nombre");
int nombre1 = Integer.parseInt(clavier.nextLine());
System.out.println("entrez un opérateur");
String opérateur = clavier.nextLine().toString();
System.out.println("entrez le deuxième nombre");	
int nombre2 = Integer.parseInt(clavier.nextLine());
	
char mult ='*';
char div = '/';
char add ='+';

switch (opérateur) {
case "*" :
System.out.println("le résultat est égal à : " + nombre1*nombre2);
break;
case "/":
System.out.println("le résultat est égal à : " + nombre1/nombre2);
break;
case "+":
System.out.println("le résultat est égal à : " + nombre1+nombre2);
break;
default:
	System.out.println("entrez un opérateur correct");
}}}
