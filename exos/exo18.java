package tests;
import java.util.Scanner;
public class exo18 {
	
	public static void main( String[] args ) {	
		
		char mult ='*';
		char div = '/';
		char add ='+';
		char  sous ='-';
		int i = 0;
		
do { 
	    Scanner clavier = new Scanner(System.in);
	    System.out.println("entrez le premier nombre");
	    int nombre1 = Integer.parseInt(clavier.nextLine());
	    System.out.println("entrez un opérateur");
	    String opérateur = clavier.nextLine().toString();
	    System.out.println("entrez le deuxième nombre");	
	    int nombre2 = Integer.parseInt(clavier.nextLine());
	 
	    System.out.println("le résultat est égal à : " + nombre1*nombre2);
	    System.out.println("le résultat est égal à : " + nombre1/nombre2);
	    System.out.println("le résultat est égal à : " + nombre1+nombre2);
	    i++;
	    }
while (i<5);
System.out.println("vous avez dépassé les 5 opérations");
	        }}

	
	
	
	
	
