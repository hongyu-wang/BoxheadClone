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
    private Vector2 dir;
    private Vector2 pos;
    private float hp;

    public Vector2 getDir() {
        return dir;
    }

    public void setDir(int[] dir) {
        this.dir = new Vector2(dir[0], dir[1]);
    }

    public Vector2 getPos() {
        return pos;
    }

    public void setPos(int[] pos) {
        this.pos = new Vector2(pos[0], pos[1]);
    }

    public float getHp() {
        return hp;
    }

    public void setHp(float hp) {
        this.hp = hp;
    }

    public void updateFromModel(PlayerModel model) {
        Method[] methods = model.getClass().getMethods();

        for(Method method : methods) {
            if (isSetter(method)) {
                try {
                    method.invoke(this, getGetterFromSetter(method, model));
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                } catch (InvocationTargetException e) {
                    e.printStackTrace();
                }
            }

        }
    }

    public static Method getGetterFromSetter (Method setter, PlayerModel model) {
        Method getter = null;
        for (Method method : model.getClass().getMethods()) {
            if (method.getName().startsWith("set") && setter.getName().substring(3).equals(method.getName().substring(3))) {
                getter = method;
            }
        }
        return getter;
    }

    public static void main(String[] args) {
        PlayerModel test = new PlayerModel();
        Player p = new Player();
        test.setDir(new int[]{1, 2});
        test.setHp(10);
        test.setPos(new int[]{1, 2});

        p.updateFromModel(test);

        System.out.println(p.getHp());
        System.out.println(p.getDir().toString());
        System.out.println(p.getPos().toString());
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