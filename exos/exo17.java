package tests;
import java.util.Scanner;
public class exo17 {
	
	public static void main( String[] args ) {

	int i =0;
	int stock =5;
	String b ="cocacola";
	String d ="pepsi";
	String e ="cafe";
do {
	Scanner sc = new Scanner (System.in);
	int boisson =Integer.parseInt(sc.nextLine());
	if (boisson==0){
		System.out.println("vous avez choisi : " +b);
        System.out.println("vous avez droit  à : " +stock +"boissons");
	    stock--;
		    }
	else if(boisson==1){
		System.out.println("vous avez choisi : " +d);
        System.out.println("vous avez droit  à : " +stock +"boissons");
	    stock--;
		    }	
	else{	
        System.out.println("vous avez choisi : " +e);
        stock--;
		    }
i++;

	}
	while (i<5);
System.out.println("il n'y a plus de stock de boissons");
stock=0;
}}

