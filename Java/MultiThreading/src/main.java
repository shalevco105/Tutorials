public class main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
            CallbackExecutor r = new CallbackExecutor();
            r.execute(new temp());
        }
    }
}
