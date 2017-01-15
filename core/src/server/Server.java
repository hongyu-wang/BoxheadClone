package server;


import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Net;
import com.badlogic.gdx.net.Socket;
import com.badlogic.gdx.net.SocketHints;
import com.badlogic.gdx.utils.Disposable;
import com.badlogic.gdx.utils.Json;
import com.mygdx.Actor.Player;
import server.Model.BulletArrayModel;
import server.Model.InitModel;
import server.Model.PlayerModel;
import server.Model.TerrainModel;

import java.io.*;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Server implements Disposable{
    private InitModel initModel;
    private PlayerModel defaultPlayer;
    private PlayerModel enemyPlayer;
    private BulletArrayModel bulletArrayModel;


    private OutputStream out;
    private InputStream in;
    private Socket client;
    private int cnt;
    private BufferedReader br;
    private Json json;
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
        client = Gdx.net.newClientSocket(Net.Protocol.TCP, "wolf.teach.cs.toronto.edu", 5000, new SocketHints());
        out = client.getOutputStream();
        in = client.getInputStream();
        json = new Json();
        br = new BufferedReader(new InputStreamReader(in));
        cnt = 0;
        defaultPlayer = new PlayerModel();
        enemyPlayer = new PlayerModel();
        bulletArrayModel = new BulletArrayModel();

    }

    public void write(String str){
        try{
            out.write((str+"\n").getBytes());
        }catch(Exception ignored) {

        }
    }
    public void read(){
        try{
            if (br.ready()){
                String line = br.readLine();

                if (initModel == null){
                    initModel = json.fromJson(InitModel.class, line);
                } else {
                    if (cnt == 0 || cnt == 1){
                        if (initModel.getId() == cnt)
                            defaultPlayer = json.fromJson(PlayerModel.class, line);
                        else
                            enemyPlayer = json.fromJson(PlayerModel.class, line);
                        cnt ++;
                    } else {
                        bulletArrayModel = json.fromJson(BulletArrayModel.class, line);
                        cnt = 0;
                    }
                }

            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public InitModel getInitModel() {
        return initModel;
    }


    public PlayerModel getDefaultPlayer() {
        return defaultPlayer;
    }

    public PlayerModel getEnemyPlayer() {
        return enemyPlayer;
    }


    public BulletArrayModel getBulletArrayModel() {
        return bulletArrayModel;
    }


    @Override
    public void dispose() {
        client.dispose();
        try {
            br.close();
            in.close();
            out.close();

        } catch (IOException e) {
            e.printStackTrace();
        }



    }
}
