package com.mygdx.boxhead;

import KeyboardControl.KeyboardSystem;
import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Camera;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.OrthographicCamera;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.Sprite;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.glutils.ShapeRenderer;
import com.badlogic.gdx.math.Vector3;
import com.badlogic.gdx.scenes.scene2d.Stage;
import com.badlogic.gdx.utils.Json;
import com.badlogic.gdx.utils.StringBuilder;
import com.mygdx.Actor.MyStage;
import com.mygdx.Actor.Player;
import server.Model.*;
import server.Server;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.security.Key;

public class MyGdxGame extends ApplicationAdapter {

    private float currDeltaTime;
    private float prevDeltaTime;
    private Sprite bulletSprite;

    private Texture bullet;
    private MyStage stage;
	private OrthographicCamera camera;
    private ShapeRenderer sr;
    private SpriteBatch batch;

	@Override
	public void create () {
		KeyboardSystem.init();
        stage = new MyStage();
        camera = (OrthographicCamera) stage.getCamera();
        bullet = new Texture("ShittyBullet.png");
        bulletSprite = new Sprite(bullet);
	    batch = new SpriteBatch();
        camera.zoom = 5;
        camera.viewportWidth = 640;
        camera.viewportHeight = 480;
        camera.translate(320, 240);
        camera.update();
        sr = new ShapeRenderer();

	}

	@Override
	public void render () {
		Gdx.gl.glClearColor(1, 1, 1, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
		currDeltaTime += Gdx.graphics.getDeltaTime();
        if (currDeltaTime - prevDeltaTime > 1/5f) {
            Server.getCentralServer().write(KeyboardSystem.getJSon());
            prevDeltaTime = currDeltaTime;
        }
        Server.getCentralServer().read();



        camera.zoom += KeyboardSystem.getScroll()*.02f;
        camera.position.set(stage.getMainPlayer().getX(), stage.getMainPlayer().getY(), 0);
        camera.update();



        batch.begin();

        for (BulletModel bullet : Server.getCentralServer().getBulletArrayModel().getBulletArray()){

            bulletSprite.setX(bullet.getX() - 20);
            bulletSprite.setX(bullet.getY() - 20);
            batch.draw(bulletSprite, bulletSprite.getX(), bulletSprite.getY());
        }

        batch.setProjectionMatrix(camera.combined);
        batch.end();
        stage.act();
        stage.draw();
        sr.begin(ShapeRenderer.ShapeType.Filled);
        sr.setProjectionMatrix(camera.combined);
        for (TerrainModel terrainModel : Server.getCentralServer().getInitModel().getTerList()){
            sr.setColor(0, 0, 0, 1);

            sr.rect(terrainModel.getX(), terrainModel.getY(), terrainModel.getWidth(), terrainModel.getHeight());
        }
        sr.end();

	}
	@Override
	public void dispose () {
		Server.getCentralServer().dispose();
		bullet.dispose();
		sr.dispose();
		stage.dispose();

	}


}
