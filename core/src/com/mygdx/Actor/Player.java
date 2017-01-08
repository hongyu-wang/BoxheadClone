package com.mygdx.Actor;


import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.g2d.*;
import com.badlogic.gdx.math.Vector2;
import server.Model.PlayerModel;


import static com.badlogic.gdx.graphics.g2d.Animation.PlayMode.LOOP_PINGPONG;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Player extends SubActor {
    private int id;
    private static final float MAX_HP = 10;
    private Vector2 dir;
    private float hp;
    private Animation<TextureRegion> animation;
    private TextureAtlas textureAtlas;
    private Sprite curFrame;
    private float stateTime;
    public Player(){
        stateTime = 0;
        textureAtlas = new TextureAtlas(Gdx.files.internal("sprites/packed/pack.atlas"));
        TextureRegion tex1 = textureAtlas.findRegion("sprite_center");
        TextureRegion tex2 = textureAtlas.findRegion("sprite_left_foot");
        TextureRegion tex3 = textureAtlas.findRegion("sprite_right_foot");
        TextureRegion [] textureRegions = {tex2, tex1, tex3};
        animation = new Animation<>(1 / 5f, textureRegions);
        animation.setPlayMode(LOOP_PINGPONG);
    }

    @Override
    public void draw(Batch batch, float parentAlpha) {
        super.draw(batch, parentAlpha);
        curFrame.setPosition(getX(), getY());

        curFrame.setOriginCenter();
        curFrame.setRotation(dir.angle() + 270);
        curFrame.draw(batch);

    }

    @Override
    public void act(float delta) {
        super.act(delta);
        stateTime += delta;
        curFrame = new Sprite(animation.getKeyFrame(stateTime));

    }


    public void updateFromModel(PlayerModel model) {
        this.setX(model.getX());
        this.setY(model.getY());
        this.dir = new Vector2(model.getDirx(), model.getDiry());
        this.hp = model.getHp();
    }


    @Override
    public void dispose() {
        textureAtlas.dispose();
    }
}