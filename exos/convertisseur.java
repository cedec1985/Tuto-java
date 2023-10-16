
import java.util.Scanner;

public class convertisseur {

public static void main(String[] args) {
	
Scanner secondes = new Scanner(System.in);
System.out.println("veuillez entrer un nombre à convertir");
int i =Integer.parseInt(secondes.nextLine());


int sec = i%60;

int minutes = i%3600 /60;

int heures = i%86400 /3600;

int jours = i/86400;


System.out.println(" jours = : " + jours + "-" +" heures = : " + heures + "-" +"minutes = :" + minutes + "-" +"secondes = :" + sec);

System.out.println("veuillez entrer une durée");
int p =Integer.parseInt(secondes.nextLine());
int se = p%60;

int mi = p%3600 /60;

int he= p%86400 /3600;

int jo= p/86400;

System.out.println(" jours = : " + jo + "-" +" heures = : " + he + "-" +"minutes = :" + mi + "-" +"secondes = :" + se);
System.out.println("veuillez entrer une durée");
int z =Integer.parseInt(secondes.nextLine());
int seco = z%60;

int minu = z%3600 /60;

int heu = z%86400 /3600;

int jou = z/86400;

System.out.println(" jours = : " + jou + "-" +" heures = : " + heu + "-" +"minutes = :" + minu + "-" +"secondes = :" + seco);
int diff = p - z ;
System.out.println(diff);

int secon = diff%60;

int minut = diff%3600 /60;

int heure= diff%86400 /3600;

int jour= diff/86400;

System.out.println("jours = : " + jour  +" heures = : " + heure +"minutes = :" + minut +"secondes = :" + secon);
int a = seco-secon;
int b = minu-minut;
int c = heu-heure;
int d = jou-jour;
System.out.println(" la différence en jours = : " + d + " la différence en heures = : " + c + "-" + "la différence en minutes = :" + b + "-" +"la différence en secondes = :" + a);

}}

