package server;


import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Net;
import com.badlogic.gdx.net.Socket;
import com.badlogic.gdx.net.SocketHints;
import com.badlogic.gdx.utils.Disposable;

import java.io.*;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Server implements Disposable{

    private OutputStream out;
    private InputStream in;
    private Socket client;
    private BufferedReader br;
    private static Server centralServer;
    public static Server getCentralServer(){
        if (centralServer == null){
            try {
                centralServer = new Server();
            }catch (Exception e){
                centralServer = new Server("xdee");
            }
        }
        return centralServer;
    }
    private Server(String s){

    }
    private Server(){
        client = Gdx.net.newClientSocket(Net.Protocol.TCP, "localhost", 5000, new SocketHints());
        out = client.getOutputStream();
        in = client.getInputStream();
        br = new BufferedReader(new InputStreamReader(in));
    }

    public void write(String str){
        try{
            out.write(str.getBytes());
        }catch(Exception ignored) {

        }
    }
    public void read(){
//        try{
//            String line = br.readLine();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
    }



    @Override
    public void dispose() {
        client.dispose();
    }
}
