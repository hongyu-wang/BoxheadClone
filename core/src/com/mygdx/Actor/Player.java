package com.mygdx.Actor;


import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.scenes.scene2d.Actor;
import server.Model.PlayerModel;
import java.lang.reflect.*;
/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Player extends Actor {
    private int id;
    private int[] dir;
    private int[] pos;
    private float hp;

    public int[] getDir() {
        return dir;
    }

    public void setDir(int[] dir) {
        this.dir = dir;
    }

    public int[] getPos() {
        return pos;
    }

    public void setPos(int[] pos) {
        this.pos = pos;
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

    public static void main(String[] args) {
        PlayerModel test = new PlayerModel();
        Player p = new Player();
        test.setDir(new int[]{1, 2});
        test.setHp(10);
        test.setPos(new int[]{1, 2});

        p.updateFromModel(test);

        System.out.println(p.getDir());
        System.out.println(p.getHp());
        System.out.println(p.getPos());
    }

    public static boolean isGetter(Method method){
        if(!method.getName().startsWith("get"))      return false;
        if(method.getParameterTypes().length != 0)   return false;
        if(void.class.equals(method.getReturnType())) return false;
        return true;
    }

    public static boolean isSetter(Method method){
        if(!method.getName().startsWith("set")) return false;
        if(method.getParameterTypes().length != 1) return false;
        return true;
    }
}