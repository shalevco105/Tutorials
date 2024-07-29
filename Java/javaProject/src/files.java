import java.io.File;
import java.io.FileWriter;   // Import the FileWriter class
import java.io.IOException;  // Import the IOException class to handle errors

public class files {
    public static void main(String[] args) {
                try {
                    File fileToWrite = new File("C:\\Users\\shale\\Desktop\\Projects\\Vue\\newF.txt");
                    FileWriter myWriter = new FileWriter(fileToWrite);
                    myWriter.write("dfdfd");
                    myWriter.close();
                    System.out.println("Successfully wrote to the file.");
                } catch (IOException e) {
                    System.out.println("An error occurred.");
                    e.printStackTrace();
                }
    }
}