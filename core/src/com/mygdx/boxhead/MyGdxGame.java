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
import server.Server;

import java.security.Key;

public class MyGdxGame extends ApplicationAdapter {

    private Texture background;
    private Stage stage;
	private OrthographicCamera camera;
	private Player mainPlayer;
    private SpriteBatch batch;
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
        batch.setProjectionMatrix(camera.combined);
	}

	@Override
	public void render () {
		Gdx.gl.glClearColor(1, 0, 0, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
        Server.getCentralServer().write(KeyboardSystem.getJSon());
        camera.position.set(mainPlayer.getX(), mainPlayer.getY(), 0);
        camera.update();

        stage.act();
        stage.draw();
        batch.begin();
        batch.draw(background, 0, 0);

        batch.end();
	}
	@Override
	public void dispose () {
		Server.getCentralServer().dispose();
	}


}
