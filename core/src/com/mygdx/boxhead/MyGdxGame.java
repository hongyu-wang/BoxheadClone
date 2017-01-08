package com.mygdx.boxhead;

import KeyboardControl.KeyboardSystem;
import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.scenes.scene2d.Stage;
import com.badlogic.gdx.utils.Json;
import com.mygdx.Actor.Player;
import server.Model.ControlModel;
import server.Model.PlayerModel;
import server.Server;

import java.security.Key;

public class MyGdxGame extends ApplicationAdapter {
    private float [] sizes ;
    private float currDeltaTime;
    private float prevDeltaTime;
    private Texture background;
    private Stage stage;
	private OrthographicCamera camera;
	private Player mainPlayer;
	private PlayerModel playerModel;
    private SpriteBatch batch;
    private float [] pos;
    private float [] dir;
	@Override
	public void create () {
		KeyboardSystem.init();
        stage = new Stage();
        camera = (OrthographicCamera) stage.getCamera();
        background = new Texture("ground_texture888.jpg");
        mainPlayer = new Player();
	    batch = new SpriteBatch();
        stage.addActor(mainPlayer);
        camera.viewportWidth = 640;
        camera.viewportHeight = 480;
        camera.translate(320, 240);
        camera.update();

        playerModel = new PlayerModel();
        playerModel.setDir(dir = new float[]{1, 1});

        playerModel.setPos(pos = new float[]{0, 0});
        sizes = new float[]{0, background.getWidth(), background.getHeight(), -background.getWidth(), -background.getHeight()};
	}

	@Override
	public void render () {
		Gdx.gl.glClearColor(1, 0, 0, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
		currDeltaTime += Gdx.graphics.getDeltaTime();
        if (currDeltaTime - prevDeltaTime > 1/30f) {
            Server.getCentralServer().write(KeyboardSystem.getJSon());
            prevDeltaTime = currDeltaTime;
        }

        Server.getCentralServer().read();



        camera.zoom += KeyboardSystem.getScroll()*.02f;
        camera.position.set(mainPlayer.getX(), mainPlayer.getY(), 0);
        camera.update();
        mainPlayer.updateFromModel(playerModel);
        playerModel.setPos(pos);
        pos[0] += dir[0];
        pos[1] += dir[1];


        batch.begin();
        for (float i : sizes) {
            for (float j : sizes) {
                if (i != j || i == 0) {
                    batch.draw(background, i, j);
                }
            }
        }


            batch.setProjectionMatrix(camera.combined);
        batch.end();
        stage.act();
        stage.draw();
	}
	@Override
	public void dispose () {
		Server.getCentralServer().dispose();
		background.dispose();
	}


}
