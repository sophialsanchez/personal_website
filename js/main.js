        $(document).ready(function(){
 var popup_1_1 = `
 		<h2>XO Health</h2>
 		<h3>Affordable Hand Exoskeleton</h3>
 		<img src="images/XO_prototype.png"></img>
 		<p></p>
 		<p>Affordable, assistive glove that makes it easier for patients with fine motor impairment in their hand or hands to regain their independence after a stroke.</p>
 		<p style="font-weight:bold;">TL;DR: "Power steering for the hand"</p>
 		<ul>
 			<li>Glove senses and enhances motion using motorized artificial tendons.</li>
 			<li>Delivers passive therapy to prevent hand contracture and loss of muscle tone</li>
 			<li>Developed protocol to use embedded sensors to predict intended hand movement, engage sensors, and complete hand movement</li>
 			<li>Wrote algorithm to reduce amount of assistance provided as patient regains hand motor function</li>
 			<li>Received $10,000 grant from <a href="http://biodesign.stanford.edu/" style="color:black;text-decoration:underline;">Stanford Biodesign</a> to develop product</li>
 			<li>Filed provisional patent "Systems and Method for a Hand Therapy and Assistive Device</li>
 			<li> 		 <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://scopeblog.stanford.edu/2017/06/16/biodesign-students-display-health-care-innovations/'>XO Health in the News</a>
</li>
 		</ul>


 		 <img src="images/xo_team.png"></img>
 		`;
 $('#animatedModal1-1').html(popup_1_1);

  var popup_1_2 = `
 		<h2>Computer Vision</h2>
 		<h3>Automated Cellular Detection in Histopathological Breast Cancer Images</h3>
 		<img src="images/cell_identification.png"></img>
 		<p></p>
 		<p>A series of breast cancer cell slide images were run through a cell detection algorithm consisting of Gaussian filtering, dilation reconstruction, Otsu thresholding to generate a binary image, masking to remove non-cellular artifacts, and watershed segmentation to count the resulting cells. </p>
 		<p style="font-weight:bold">TL;DR: "Highly-accurate automated cell detection"</p>
 		<ul>
 			<li>Achieved an error rate of 1.57%</li>
 			<li> <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://github.com/sophialsanchez/automated_cellular_detection'>Codebase</a></li>
 			<li><a style="color:#565656; text-decoration:underline" href="pdfs/cell_detection.pdf">Full report</a></li>
 		</ul>
 		`;
 $('#animatedModal1-2').html(popup_1_2);

  var popup_1_3 = `
 		<h2>CNN</h2>
 		<h3>Classifier for Cervical Cancer</h3>
 		<img src="images/cervical_cancer_cnn.png"></img>
 		<p></p>
 		<p>Developed an algorithm for cervical image classification in a team of three, including (1) preprocessing and segmentation of labeled cervical images, where each image is in one of three classes according to the position of the transformation zone; (2) training a deep classifier using different convolutional neural architectures, with hyperparameter selection according to standard model validation procedures; and (3) evaluating the accuracy of the final system via a multi-class logarithmic loss.</p>
 		<p style="font-weight:bold">TL;DR: "CNN to classify cervical images to help treat cancer"</p>
 		<ul>
 			<li>Ranked in the Top 25% for <a style="color:#565656; text-decoration:underline" href="https://www.kaggle.com/c/intel-mobileodt-cervical-cancer-screening">Kaggle Intel & MobileODT Cervical Cancer Screening</a> competition</li>
 			<li>Utilized d-hashing to find and remove duplicate, or near duplicate medical images and the 2-D (a-R) feature space to crop images and reduce noise in the dataset</li>
 			<li><a style="color:#565656; text-decoration:underline" href="pdfs/cervical_cancer_cnn.pdf">Full report</a></li>
 		</ul>

 		`;
 $('#animatedModal1-3').html(popup_1_3);


  var popup_2_1 = `
 		<h2>Halo Neuroscience</h2>
 		<h3>Neurostimulation Patent - Coinventor</h3>
 		<div>
 		<img style="width:50%; margin: 0 auto; display: block;" src="images/patent_image.png"></img>
 		</div>
 		<p></p>
 		<p>Named co-inventor on US patent 20150066104 A1 for a combined hardware and software system to provide weak neurostimulation to a patient in conjunction with rehabilitative motor tasks.
The system is comprised of (1) providing an electrical stimulation treatment to a brain region for 
each task of the set of tasks, (2) receiving a signal stream characterizing a neurological state of
 the user, (3) identifying a neurological signature characterizing the neurological state associated 
 with the task, and (4) modulating the electrical stimulation treatment.</p>

 		<p style="font-weight:bold">TL;DR: "User-friendly hardware/software to deliver therapeutic neurostimulation to patients"</p>
 		<ul>
 			<li>Technology utilized in <a style="color:#565656; text-decoration:underline" href='http://academicdepartments.musc.edu/chp/ot/research/upper_extremity_lab/'>clinical trials at MUSC</a></li>
 			<li><a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://patents.google.com/patent/US9802042B2/en'>Full patent</a></li>
 		</ul>

 		`;
 $('#animatedModal2-1').html(popup_2_1);

  var popup_2_2 = `
 		<h2>Cancer Systems Biology</h2>
 		<h3>Integrative computational modeling of tumor-mediated immunosuppression</h3>
 		<img style="width:50%; margin: 0 auto; display: block;" src="images/tumor_mediated_immuno.png"></img>
 		<p></p>
 		<p>Collaborate with a <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href="http://ccsb.stanford.edu/people/people1.html">team of 20</a> at <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='http://ccsb.stanford.edu'>Stanford Center for Cancer Systems Biology</a> to
 		 elucidate the role of lymph node metastases in systemic tumor immunosuppression. 
 		 Develop computational tools to identify candidate mediators of tumor-immune interactions
 		  that induce immunosuppression
 		  for functional validation.</p>
 		<p style="font-weight:bold">TL;DR: "Use cancer data to identify prognostic genes"</p>
 		<ul>
 			<li>Write and utilize scripts to delineate prognostic genes for survival and metastasis in cancer</li>
 			<li>Optimize algorithms to decrease runtime for <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://www.nature.com/articles/nm.3909'>PRECOG</a> tasks from 3 hours to 2.5 minutes, allowing for increasingly complex genetic analyses</li>
 			<li><a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='http://ccsb.stanford.edu/research/project30.html'>Project description</a>
</li>
 		</ul>
 		`;
 $('#animatedModal2-2').html(popup_2_2);

  var popup_2_3 = `
 		<h2>XO Health</h2>
 		<h3>Affordable Hand Exoskeleton</h3>
 		<img src="images/XO_prototype.png"></img>
 		<p></p>
 		<p>Affordable, assistive glove that makes it easier for patients with fine motor impairment in their hand or hands to regain their independence after a stroke.</p>
 		<p>"Power steering for the hand"</p>
 		<ul>
 			<li>Glove senses and enhances motion using motorized artificial tendons.</li>
 			<li>Delivers passive therapy to prevent hand contracture and loss of muscle tone</li>
 			<li>Developed protocol to use embedded sensors to predict intended hand movement, engage sensors, and complete hand movement</li>
 			<li>Wrote algorithm to reduce amount of assistance provided as patient regains hand motor function</li>
 			<li>Received $10,000 grant from <a href="http://biodesign.stanford.edu/" style="color:black;text-decoration:underline;">Stanford Biodesign</a> to develop product</li>
 			<li>Filed provisional patent "Systems and Method for a Hand Therapy and Assistive Device</li>
 			<li> 		 <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://scopeblog.stanford.edu/2017/06/16/biodesign-students-display-health-care-innovations/'>XO Health in the News</a>
</li>
 		</ul>


 		 <img src="images/xo_team.png"></img>
 		`;
 $('#animatedModal2-3').html(popup_2_3);

  var popup_3_1 = `
 		<h2>XO Health</h2>
 		<h3>Affordable Hand Exoskeleton</h3>
 		<img src="images/XO_prototype.png"></img>
 		<p></p>
 		<p>Affordable, assistive glove that makes it easier for patients with fine motor impairment in their hand or hands to regain their independence after a stroke.</p>
 		<p>"Power steering for the hand"</p>
 		<ul>
 			<li>Glove senses and enhances motion using motorized artificial tendons.</li>
 			<li>Delivers passive therapy to prevent hand contracture and loss of muscle tone</li>
 			<li>Developed protocol to use embedded sensors to predict intended hand movement, engage sensors, and complete hand movement</li>
 			<li>Wrote algorithm to reduce amount of assistance provided as patient regains hand motor function</li>
 			<li>Received $10,000 grant from <a href="http://biodesign.stanford.edu/" style="color:black;text-decoration:underline;">Stanford Biodesign</a> to develop product</li>
 			<li>Filed provisional patent "Systems and Method for a Hand Therapy and Assistive Device</li>
 			<li> 		 <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://scopeblog.stanford.edu/2017/06/16/biodesign-students-display-health-care-innovations/'>XO Health in the News</a>
</li>
 		</ul>


 		 <img src="images/xo_team.png"></img>
 		`;
 $('#animatedModal3-1').html(popup_3_1);

  var popup_3_2 = `
 		<h2>XO Health</h2>
 		<h3>Affordable Hand Exoskeleton</h3>
 		<img src="images/XO_prototype.png"></img>
 		<p></p>
 		<p>Affordable, assistive glove that makes it easier for patients with fine motor impairment in their hand or hands to regain their independence after a stroke.</p>
 		<p>"Power steering for the hand"</p>
 		<ul>
 			<li>Glove senses and enhances motion using motorized artificial tendons.</li>
 			<li>Delivers passive therapy to prevent hand contracture and loss of muscle tone</li>
 			<li>Developed protocol to use embedded sensors to predict intended hand movement, engage sensors, and complete hand movement</li>
 			<li>Wrote algorithm to reduce amount of assistance provided as patient regains hand motor function</li>
 			<li>Received $10,000 grant from <a href="http://biodesign.stanford.edu/" style="color:black;text-decoration:underline;">Stanford Biodesign</a> to develop product</li>
 			<li>Filed provisional patent "Systems and Method for a Hand Therapy and Assistive Device</li>
 			<li> 		 <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://scopeblog.stanford.edu/2017/06/16/biodesign-students-display-health-care-innovations/'>XO Health in the News</a>
</li>
 		</ul>


 		 <img src="images/xo_team.png"></img>
 		`;
 $('#animatedModal3-2').html(popup_3_2);

  var popup_3_3 = `
 		<h2>XO Health</h2>
 		<h3>Affordable Hand Exoskeleton</h3>
 		<img src="images/XO_prototype.png"></img>
 		<p></p>
 		<p>Affordable, assistive glove that makes it easier for patients with fine motor impairment in their hand or hands to regain their independence after a stroke.</p>
 		<p>"Power steering for the hand"</p>
 		<ul>
 			<li>Glove senses and enhances motion using motorized artificial tendons.</li>
 			<li>Delivers passive therapy to prevent hand contracture and loss of muscle tone</li>
 			<li>Developed protocol to use embedded sensors to predict intended hand movement, engage sensors, and complete hand movement</li>
 			<li>Wrote algorithm to reduce amount of assistance provided as patient regains hand motor function</li>
 			<li>Received $10,000 grant from <a href="http://biodesign.stanford.edu/" style="color:black;text-decoration:underline;">Stanford Biodesign</a> to develop product</li>
 			<li>Filed provisional patent "Systems and Method for a Hand Therapy and Assistive Device</li>
 			<li> 		 <a style="color:#565656; text-decoration:underline" id='popup_link' target="_blank" href='https://scopeblog.stanford.edu/2017/06/16/biodesign-students-display-health-care-innovations/'>XO Health in the News</a>
</li>
 		</ul>


 		 <img src="images/xo_team.png"></img>
 		`;
 $('#animatedModal3-3').html(popup_3_3);

            });

