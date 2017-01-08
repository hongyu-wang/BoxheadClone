package com.mygdx.Actor;

import com.badlogic.gdx.scenes.scene2d.Stage;
import server.Server;

import java.util.ArrayList;


/**
 * Created by hongy on 1/8/2017.
 */
public class MyStage extends Stage {
    private Server server;
    private Player mainPlayer;
    private Player enemyPlayer;

    public MyStage(){
        server = Server.getCentralServer();
        server.read();
        mainPlayer = new Player();
        enemyPlayer = new Player();

        addActor(mainPlayer);
        addActor(enemyPlayer);
        mainPlayer.updateFromModel(server.getDefaultPlayer());
        enemyPlayer.updateFromModel(server.getEnemyPlayer());
    }

    @Override
    public void act() {
        super.act();
        if (server.getDefaultPlayer() != null && server.getEnemyPlayer() != null) {
            mainPlayer.updateFromModel(server.getDefaultPlayer());
            enemyPlayer.updateFromModel(server.getEnemyPlayer());
        }

    }

    public Player getMainPlayer() {
        return mainPlayer;
    }
}
