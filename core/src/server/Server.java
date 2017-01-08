package server;


import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Net;
import com.badlogic.gdx.net.Socket;
import com.badlogic.gdx.net.SocketHints;
import com.badlogic.gdx.utils.Disposable;

import java.io.InputStream;
import java.io.OutputStream;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Server implements Disposable{

    private OutputStream out;
    private InputStream in;
    private Socket client;
    private static Server centralServer;
    public static Server getCentralServer(){
        if (centralServer == null){
            centralServer = new Server();
        }
        return centralServer;
    }

    private Server(){
        client = Gdx.net.newClientSocket(Net.Protocol.TCP, "localhost", 5000, new SocketHints());
        out = client.getOutputStream();
        in = client.getInputStream();
    }

    public void write(String str){
        try{
            out.write(str.getBytes());
        }catch(Exception ignored) {

        }
    }




    @Override
    public void dispose() {
        client.dispose();
    }
}
