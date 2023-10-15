package tests;
import java.util.Scanner;
public class exo9TQ {
public static void main( String[] args ) {

Scanner sc = new Scanner (System.in);
int boisson =Integer.parseInt(sc.nextLine());
int i =0;
int stock =5;
String b ="cocacola";
String d ="pepsi";
while (i<5){
System.out.println("vous avez droit  à : " +stock +"boissons");
stock--;
i++;
if (i==0){
System.out.println("vous avez choisi : " +b);
    }
    else if(i==1){
System.out.println("vous avez choisi : " +d);
    }
}
System.out.println("il n'y a plus de stock de boissons");
stock=0;
}}

