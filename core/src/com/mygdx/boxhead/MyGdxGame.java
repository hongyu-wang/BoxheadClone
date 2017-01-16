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

    private MyStage stage;
	private OrthographicCamera camera;
    private ShapeRenderer sr;
    private SpriteBatch batch;

    @Override
	public void create () {
		KeyboardSystem.init();
        stage = new MyStage();
        camera = (OrthographicCamera) stage.getCamera();
	    batch = new SpriteBatch();
        camera.zoom = 5;
        camera.viewportWidth = 640;
        camera.viewportHeight = 480;
        camera.translate(320, 240);
        camera.update();
        sr = new ShapeRenderer();
        Thread thread1 = new Thread(new Runnable() {
            @Override
            public void run() {
            while (true) {
                try {
                    Server.getCentralServer().read();
                } catch (Exception e) {
                    break;
                }
            }
            }
        });
        thread1.start();

        Thread thread2 = new Thread(new Runnable() {
            @Override
            public void run() {
            while (true) {
                try {
                    Server.getCentralServer().write(KeyboardSystem.getJSon());
                } catch (Exception e) {
                    break;
                }
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            }
        });
	    thread2.start();
	}

	@Override
	public void render () {
		Gdx.gl.glClearColor(.1f, .1f, .1f, .1f);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
		currDeltaTime += Gdx.graphics.getDeltaTime();





        camera.zoom += KeyboardSystem.getScroll()*.02f;
        camera.position.set(stage.getMainPlayer().getX(), stage.getMainPlayer().getY(), 0);
        camera.update();



        batch.begin();



        batch.setProjectionMatrix(camera.combined);
        batch.end();
        stage.act();
        stage.draw();
        sr.begin(ShapeRenderer.ShapeType.Filled);
        sr.setProjectionMatrix(camera.combined);
        sr.setColor(1, 0, 1, 1);
        sr.rect(
                stage.getMainPlayer().getX() - 60,
                stage.getMainPlayer().getY() + 100,
                stage.getMainPlayer().getHp()/10 * 120,
                10
        );
        sr.setColor(0, 1, 1, 1);
        sr.rect(
                stage.getEnemyPlayer().getX() - 60,
                stage.getEnemyPlayer().getY() + 100,
                stage.getEnemyPlayer().getHp()/10 * 120,
                10
        );


        sr.setColor(0, 0, 0, 1);
        for (TerrainModel terrainModel : Server.getCentralServer().getInitModel().getTerList()){
            sr.rect(terrainModel.getX(), terrainModel.getY(), terrainModel.getWidth(), terrainModel.getHeight());
        }

        for (BulletModel bullet : Server.getCentralServer().getBulletArrayModel().getBulletArray()){
            if (bullet.getId() == stage.getMainPlayer().getId())
                sr.setColor(0, 1, 0, 1);
            else {
                sr.setColor(1, 0, 0, 1);
            }
            sr.circle(bullet.getX(), bullet.getY(), 10);

        }
        sr.end();

	}
	@Override
	public void dispose () {
		Server.getCentralServer().dispose();
		sr.dispose();
		stage.dispose();


	}


}
