import java.util.Random;
import java.util.Scanner;


public class main {
    public static void main(String[] args) {
        Scanner numScanner = new Scanner(System.in);
        int x = 0;
        while (x < 19) {
            System.out.println("enter number");
            x = numScanner.nextInt();
            x = x + Math.max(multNum(x), x);
            System.out.println("x is: " + x);
        }
    }

    public static int multNum(int num) {
        Random rand = new Random();
        num = rand.nextInt(100);
        System.out.println("the random number is: " + num);
        return num;
    }
}
