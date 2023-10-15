package exos;

import java.util.Scanner;

public class exo14 {

public static void main(String[]args) {

Scanner tennis = new Scanner(System.in)	;
int balle = Integer.parseInt(tennis.nextLine());
balle = 10;
System.out.println("combien de balles reste-t-il ?"+ balle);
boolean pret = true ;
boolean nonpret= false;
System.out.println("Etes-vous prêt ?");
int etat = Integer.parseInt(tennis.nextLine());
while(balle!=0 && true) {
	balle--;
	System.out.println("lancez la balle !");
    System.out.println("il reste " + balle + "balles");
} 
System.out.println("ne lancez pas la balle !");
balle=0;
}
}
