<%@page import="org.exoplatform.trial.TrialService"%>
<center><a href="<%=TrialService.getExtendFormUrl()%>?pc=<%=TrialService.getProductCode() %>" target="_blank" class="Button ExtendEvaluationButton">Contact eXo sales to request to request an extender evaluation license<br/>Your product license code is <b><%=TrialService.getProductCode() %></b></a><center>