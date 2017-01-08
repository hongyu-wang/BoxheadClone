package server.Model;

/**
 * Created by hongy on 1/7/2017.
 */
public class PlayerModel extends DefaultModel{
    private float hp;
    private int[] dir;
    private int[] pos;

    public float getHp() {
        return hp;
    }

    public void setHp(float hp) {
        this.hp = hp;
    }

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
}
