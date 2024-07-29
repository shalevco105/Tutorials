import java.util.Scanner;

public class temp {
    public static void main(String[] args) {

        String looserMsg = "try again looser";
        String msg = looserMsg;
        while (msg.equals(looserMsg)) {
            msg = game();
            System.out.println(msg);
        }
    }

    public static String game() {
        Scanner numScanner = new Scanner(System.in);
        System.out.println("just who is not gay can press 0 and success. " +
                "if you can't try something else");
        int num = numScanner.nextInt();
        if (num == 0) {
            return "try again looser";
        } else return "probably you're gay";
    }
}
