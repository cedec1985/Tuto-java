package tests;

import java.util.Scanner;
public class exo7 {
	 
	   public static void main( String[] args ) {
	     Scanner sc =new Scanner (System.in);
	     int annee =Integer.parseInt(sc.nextLine());
	      
	      if ( ( ( annee % 4 == 0 ) && ( annee % 100 != 0 ) ) || ( annee % 400 == 0 ) ) {
	         System.out.println( "l'année " + annee + " est bissextile");
	      }
	      else {
	         System.out.println( "l'année" + annee + "est non bissextile");
	      }      
	   }
	}

