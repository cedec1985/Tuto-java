package exos;

import java.util.Scanner;

class exo24 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

Scanner sc = new Scanner (System.in);
System.out.println("le nombre de joueurs est :");
int joueurs = Integer.parseInt(sc.nextLine());
int joueur =0;
int i =0;
int m =0;
int [] scores = new int [10];
for(i=0;i<=scores.length;i++) {
System.out.println("entrez un score :");
scores[i] =sc.nextInt();
System.out.println("le score du joueur"  +joueur+ "est" + scores[i]);
joueur++;i++;
m = m +scores[i];
}
System.out.println("la moyenne est :" + m/10);
}}







	
	

