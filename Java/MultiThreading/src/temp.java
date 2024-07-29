public class temp implements CallbackRunnable {
    @Override
    public void callback() {
        System.out.println("callback");
    }

    @Override
    public void run() {
        System.out.println("run");
    }
}
