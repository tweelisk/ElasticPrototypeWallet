package nxt.http;

import nxt.Nxt;
import nxt.NxtException;
import nxt.Transaction;
import nxt.util.Convert;
import org.json.simple.JSONObject;
import org.json.simple.JSONStreamAware;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;

import static nxt.http.JSONResponses.INCORRECT_TRANSACTION_BYTES;
import static nxt.http.JSONResponses.MISSING_TRANSACTION_BYTES;

public final class BroadcastTransaction extends APIServlet.APIRequestHandler {

    static final BroadcastTransaction instance = new BroadcastTransaction();

    private BroadcastTransaction() {}

    private static final List<String> parameters = Arrays.asList("transactionBytes");

    @Override
    List<String> getParameters() {
        return parameters;
    }

    @Override
    JSONStreamAware processRequest(HttpServletRequest req) throws NxtException.ValidationException {

        String transactionBytes = req.getParameter("transactionBytes");
        if (transactionBytes == null) {
            return MISSING_TRANSACTION_BYTES;
        }

        try {

            byte[] bytes = Convert.parseHexString(transactionBytes);
            Transaction transaction = Nxt.getTransactionProcessor().parseTransaction(bytes);

            JSONObject response = new JSONObject();

            try {
                Nxt.getTransactionProcessor().broadcast(transaction);
                response.put("transaction", transaction.getStringId());
            } catch (NxtException.ValidationException e) {
                response.put("error", e.toString());
            }

            return response;

        } catch (RuntimeException e) {
            return INCORRECT_TRANSACTION_BYTES;
        }
    }

    @Override
    boolean requirePost() {
        return true;
    }

}
