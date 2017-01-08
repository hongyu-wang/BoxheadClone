package com.mygdx.Actor;


import com.badlogic.gdx.graphics.g3d.model.Animation;
import com.badlogic.gdx.scenes.scene2d.Actor;
import server.Model.PlayerModel;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Player extends Actor {
    private int id;
    private float[] dir;
    private float [] pos;
    private float hp;
    private Animation animation;
    public float[] getDir() {
        return dir;
    }

    public void setDir(float[] dir) {
        this.dir = dir;
    }

    public float [] getPos() {
        return new float[]{getX(), getY()};
    }

    public void setPos(float[] pos) {
        setX(pos[0]);
        setY(pos[1]);
    }

    public float getHp() {
        return hp;
    }

    public void setHp(float hp) {
        this.hp = hp;
    }

    public void updateFromModel(PlayerModel model) {
        this.setHp(model.getHp());
        this.setPos(model.getPos());
        this.setDir(model.getDir());
    }



}