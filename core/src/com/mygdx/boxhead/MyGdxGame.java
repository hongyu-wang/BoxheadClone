package com.mygdx.boxhead;

import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Net;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.net.Socket;
import com.badlogic.gdx.net.SocketHints;

import java.io.*;
import java.util.Scanner;

import static java.lang.Thread.sleep;

public class MyGdxGame extends ApplicationAdapter {
	SpriteBatch batch;
	Texture img;
	OutputStream stream;
	Scanner in = new Scanner(System.in);
	@Override
	public void create () {
		batch = new SpriteBatch();
		img = new Texture("badlogic.jpg");
		Socket client = Gdx.net.newClientSocket(Net.Protocol.TCP, "localhost", 5000, new SocketHints());

		stream = client.getOutputStream();



	}

	@Override
	public void render () {

		Gdx.gl.glClearColor(1, 0, 0, 1);
		Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);
		batch.begin();
		batch.draw(img, 0, 0);
		try {
			stream.write((in.nextLine()+"\n").getBytes());

		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		batch.end();
	}
	@Override
	public void dispose () {
		batch.dispose();
		img.dispose();
	}
}
