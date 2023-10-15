package tests;
import java.util.Scanner;

class exo13{

  public static void main(String args[])
  {
    int nbr, i;
    System.out.print("Entrez un nombre pour afficher sa table de multiplication: ");
    Scanner sc = new Scanner(System.in);
    int nbr1 = 2;
    for (i = 1; i <= 10; i++)
      System.out.println(nbr1 + "x" + i + " = " + (nbr1 * i));
  }
}
