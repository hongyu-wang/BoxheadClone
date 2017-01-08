package com.mygdx.Actor.bullets;

import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.scenes.scene2d.Actor;
import com.mygdx.Actor.SubActor;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Bullet extends SubActor {


    public Texture texture;

    public Bullet(){
        texture = new Texture("ShittyBullet.jpg");
    }

    @Override
    public void dispose() {

    }
}
