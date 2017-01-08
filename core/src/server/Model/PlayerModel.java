package server.Model;

/**
 * Created by hongy on 1/7/2017.
 */
public class PlayerModel extends DefaultModel{
    private float hp;
    private float [] dir;
    private float [] pos;

    public float getHp() {
        return hp;
    }

    public void setHp(float hp) {
        this.hp = hp;
    }

    public float[] getDir() {

        return dir;
    }

    public void setDir(float [] dir) {
        this.dir = dir;
    }

    public float[] getPos() {
        return pos;
    }

    public void setPos(float [] pos) {
        this.pos = pos;
    }
}
