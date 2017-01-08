package com.mygdx.Actor.bullets;

import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.Batch;
import com.badlogic.gdx.graphics.g2d.Sprite;
import com.badlogic.gdx.math.Vector2;
import com.badlogic.gdx.scenes.scene2d.Actor;
import com.mygdx.Actor.SubActor;
import server.Model.BulletModel;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Bullet extends SubActor {

    private static int rotationAmount;
    private static  Texture texture;

    private Sprite sprite;
    public Bullet(){
        if (texture == null)
            texture = new Texture("ShittyBullet.jpg");
        sprite = new Sprite(texture);
        rotationAmount = 0;
    }


    @Override
    public void draw(Batch batch, float parentAlpha) {
        super.draw(batch, parentAlpha);

        sprite.setOriginCenter();
        sprite.rotate(rotationAmount);
        batch.draw(sprite, getX(), getY());
    }

    @Override
    public void act(float delta) {
        super.act(delta);
        rotationAmount += 2;
    }

    public void updateFromModel(BulletModel model){

    }


    @Override
    public void dispose() {
        texture.dispose();
    }
}
