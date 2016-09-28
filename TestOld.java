


public class TestOld {


    public static void main (String[] args) throws Exception {
    	
    	String temp = "cn=regcsr,ou=member,dc=ghc,dc=org^cn=authcsr,ou=member,dc=ghc,dc=org^cn=mychsdartcsr,ou=member,dc=ghc,dc=org";
    	if(temp.indexOf("mychartcsr")!=-1)
    	{
    	   System.out.println("there is 'b' in temp string");
    	}
    	else
    	{
    	   System.out.println("there is no 'b' in temp string");
    	}

    }
}