package com.mygdx.boxhead;

import KeyboardControl.KeyboardSystem;
import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.utils.Json;
import server.Model.ControlModel;
import server.Server;

import java.security.Key;

public class MyGdxGame extends ApplicationAdapter {
    public static float prevDeltaTime;
    private static float currentDeltaTime;
	@Override
	public void create () {
		KeyboardSystem.init();
		currentDeltaTime = 0;

	}

	@Override
	public void render () {
        currentDeltaTime += Gdx.graphics.getDeltaTime();
		Gdx.gl.glClearColor(1, 0, 0, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
        Server.getCentralServer().write(KeyboardSystem.getJSon());

	}
	@Override
	public void dispose () {
		Server.getCentralServer().dispose();
	}

	public static float getCurrentDeltaTime(){
	    return currentDeltaTime;
    }

}
